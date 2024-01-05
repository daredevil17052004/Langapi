import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import styles from './nav.module.css'
import SecondNav from './SecondNav'

const LanguageTranslator = () => {

    let [text, setText] = useState([])
    let [lang,setLang] = useState('ru')
    let [cate, setCate] = useState('general')
    
    useEffect(()=>{
        async function News(){
            try{
                let response = await axios.get(`http://api.mediastack.com/v1/news?access_key=597350ef8645d717ace9bda502eef900&languages=${lang}&limit=25&categories=${cate}`)
                console.log(response);
                setText(response.data.data)
            }catch(error){
                console.log(error);
            }
        }
        News()
    },[lang,cate])

    function handleLinkClick(e, url){
        e.preventDefault();
        window.open(url, '_blank'); 
    }

    function handleLanguage(language){
        setLang(language)
    }

    function handleCategory(category){
        setCate(category)
    }

    

  return (






    <div className={styles.m}>






    {/* navBAR */}


        <div className={styles.main}>
            <div className={styles.logo}>
                <div className={styles.innerLogo}>
                    <img src="/t.png"/><img src="/n.png"/><img src="/n (1).png" />
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.categories} onClick={()=>handleCategory('general')}>
                    General
                </div>
                <div className={styles.categories} onClick={()=>handleCategory('business')}>
                    Business
                </div>
                <div className={styles.categories} onClick={()=>handleCategory('entertainment')}>
                    Entertainment
                </div>
                <div className={styles.categories} onClick={()=>handleCategory('health')}>
                    Health
                </div>
                <div className={styles.categories} onClick={()=>handleCategory('science')}>
                    Science
                </div>
                <div className={styles.categories} onClick={()=>handleCategory('sports')}>
                    Sports
                </div>
                <div className={styles.categories} onClick={()=>handleCategory('technology')}>
                    Technology
                </div>
                <div className={styles.categories}>
                    Watch Live     
                </div>
        </div>
        <div>
            <div className={styles.signup}>
                <button>SignUp/LogIn</button>
            </div>
        </div>        
    </div>









    {/* SecondNavBAr */}




    <div className={styles.secMain}>
        <div className={styles.secInner}>
            <div className={styles.secItems} onClick={()=>handleLanguage('en')}>
                English
            </div>
            <div className={styles.secItems} onClick={()=>handleLanguage('fr')}>
                French
            </div>
            <div className={styles.secItems} onClick={()=>handleLanguage('de')}>
                German
            </div>
            <div className={styles.secItems} onClick={()=>handleLanguage('ar')}>
                Arabic
            </div>
            <div className={styles.secItems} onClick={()=>handleLanguage('es')}>
                Spanish
            </div>
            <div className={styles.secItems} onClick={()=>handleLanguage('ru')}>
                Russian
            </div>
        </div>
    </div>













        {
            text.map((item,index)=>{
                return(
                    <div key={index} className={styles.news}>
                        <div className={styles.titleOfEveryNews}>
                        <a href={item.url} onClick={(e)=>handleLinkClick(e,item.url)}>{item.title}</a>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img src={item.image} alt="" />
                            </div>
                            <div>
                                {item.description}
                            </div>
                        </div>
                        <hr />
                        <br />

                    </div>
                )
            })
        }
    </div>
  )
}

export default LanguageTranslator