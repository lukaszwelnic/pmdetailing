import {useTranslation} from "react-i18next";

export default function Home() {
    const { t } = useTranslation();

    return <h1 className="text-2xl text-center font-semibold text-black p-4">{t(`home.title`)}</h1>;
}
