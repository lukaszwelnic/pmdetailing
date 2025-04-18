import {useTranslation} from "react-i18next";

export default function Offer() {
    const { t } = useTranslation();

    return <h1 className="text-2xl text-center font-semibold text-black p-4">{t(`offer.title`)}</h1>;
}
