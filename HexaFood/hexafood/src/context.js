import React, { useState, useContext, useEffect, useRef } from 'react'
import { products } from './data'

const AppContext = React.createContext();
const allProducts = [...new Set(products.map((item) => item.category))] //display menu by category

const getLocalStorage = () => {
    const list = localStorage.getItem('information');
    if (list) {
        return JSON.parse(localStorage.getItem('information'));
    } else {
        return []
    }
}

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState();
    const scrollHomeProduct = useRef(null);
    const [menuProducts, setMenuProducts] = useState(products)
    const [categories, setCategories] = useState(allProducts);
    const [active, setActive] = useState();
    const [isWidth, setIsWidth] = useState();
    const [information, setInformation] = useState(getLocalStorage());
    const [itemPrice, setItemPrice] = useState();
    const [itemCount, setItemCount] = useState();


    // Slidebar click open - close
    const openSidebar = () => {
        setIsSidebarOpen(true)
        if (isModalOpen === true) {
            closeModal();
        }
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
        if (isSidebarOpen === true) {
            closeSidebar();
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    //Scroll to menu home
    const scrollToHomeProduct = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 150,
            behavior: 'smooth',
        })
    }
    // Check and display information by category 
    const fillterItems = (category, id) => {
        const newItems = products.filter((item) => item.category === category);
        setMenuProducts(newItems);
        setActive(id)
    }

    /*
    get information
    check for existence
    If it doesn't exist, add a new one
    if already exists will add 1qty (the number of products)
    */
    const getInformation = (newProduct) => {
        const exist = information.find((x) => x.id === newProduct.id);
        if (exist) {
            setInformation(
                information.map((x) =>
                    x.id === newProduct.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setInformation([...information, { ...newProduct, qty: 1 }]);
        }
    }

    // check for existence 
    const removeCart = (newProduct) => {
        const exist = information.find((x) => x.id === newProduct.id);
        if (exist) {
            setInformation(information.filter((x) => x.id !== newProduct.id))
        }
    }

    //Calculate the total amount of product
    const countTotal = () => {
        const count = information.reduce((a, c) => a + c.qty, 0)
        setItemCount(count);
    }

    // Calculate the total price
    const priceTotal = () => {
        const itemsPrice = information.reduce((a, c) => a + c.price * c.qty, 0);
        setItemPrice(itemsPrice)
    }


    //minus button
    const handleMinus = (newProduct) => {
        const exist = information.find((x) => x.id === newProduct.id);
        if (exist.qty === 1) {
            setInformation(
                information.filter((x) => x.id !== newProduct.id)
            );
        } else {
            setInformation(
                information.map((x) =>
                    x.id === newProduct.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            )
        }

    }

    //frame width
    const handleWidth = () => {
        const position = window.innerWidth;
        setIsWidth(position);
    }

    //Scroll
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position) {
            setIsModalOpen(false)
            setIsSidebarOpen(false)
        }
    };

    useEffect(() => {
        priceTotal();
        countTotal();
    }, [information])

    //LocalStorage
    useEffect(() => {
        localStorage.setItem('information', JSON.stringify(information));
    }, [information])

    useEffect(() => {
        fillterItems('Pizza', 0);
        window.addEventListener('resize', handleWidth, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleWidth);
        };
    }, []);
    return <AppContext.Provider value={{
        // ...state,
        isModalOpen,
        isSidebarOpen,
        scrollPosition,
        menuProducts,
        categories,
        active,
        isWidth,
        information,
        itemPrice,
        itemCount,
        scrollHomeProduct,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
        handleScroll,
        fillterItems,
        handleWidth,
        getInformation,
        removeCart,
        handleMinus,
        scrollToHomeProduct,
    }}>{children}</AppContext.Provider>
}
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider }