import React, { useState, useContext, useEffect, useRef } from 'react'
import { products } from './data'
import formatCash from './formatPrice/formatCash';

const AppContext = React.createContext();
const allProducts = [...new Set(products.map((item) => item.category))] //display menu by category

// Connect localStorage
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
    const scrollHomeProduct = useRef(null); //scroll to id
    const [menuProducts, setMenuProducts] = useState(products)
    const [categories, setCategories] = useState(allProducts);
    const [active, setActive] = useState();
    const [information, setInformation] = useState(getLocalStorage());//import localStorage
    const [itemPrice, setItemPrice] = useState();
    const [itemCount, setItemCount] = useState();
    const [sizeOption, setSizeOption] = useState('');

    // Form cart
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [listFormCat, setLisFormCart] = useState([]);
    const [handleCheck, setHandleCheck] = useState('')


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
    //    console.log(sizeOption.options);
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

    //Scroll
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position) {
            setIsModalOpen(false)
            setIsSidebarOpen(false)
        }
    };

    // Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone || !address) {
            setHandleCheck(
                <div className='pt-4'>
                    <i className="fa-sharp fa-solid fa-circle-exclamation text-danger"></i>
                    <img src="../assets/images/bat_buoc_01.png" alt="" className='m-2' /> là mục bắt buộc.
                </div>);
        }
        else {
            const newItem = {
                name: name,
                phone: phone,
                address: address,
                comment: comment,
            };
            setLisFormCart(newItem);
            setName('');
            setPhone('');
            setAddress('');
            setComment('');
            setHandleCheck(
                <div className="alert alert-success" role="alert">
                    This is a success alert—check it out!
                </div>
            );
        }


    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (listFormCat != '') {
                setHandleCheck('');
            }
        }, 3000)
        return () => clearTimeout(timeout)
    }, [handleCheck])


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
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
        information,
        itemPrice,
        itemCount,
        scrollHomeProduct,
        handleCheck,
        name, phone, address, comment,
        sizeOption,
        formatCash,
        setName,
        setPhone,
        setAddress,
        setComment,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
        handleScroll,
        fillterItems,
        getInformation,
        removeCart,
        handleMinus,
        scrollToHomeProduct,
        handleSubmit,
        setSizeOption,
    }}>{children}</AppContext.Provider>
}
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider }

