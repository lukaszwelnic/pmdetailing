import {useTranslation} from "react-i18next";

export default function Blog() {
    const { t } = useTranslation();

    return <h1 className="text-2xl text-center font-semibold text-black pt-24 p-4">{t(`blog.title`)}</h1>;
}
