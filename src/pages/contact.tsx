import React from 'react';
import { useTranslation } from 'react-i18next';
import "../components/traduce/i18n";

export default function Contact() {
    const {t, i18n} = useTranslation();

    //@ts-ignore
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return(
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('pt')}>Portuguese</button>
            <button onClick={() => changeLanguage('es')}>Spanish</button>

            <h2>{t('header.title')}</h2>
            <h5>{t('content.text')}</h5>
        </div>
    )
}