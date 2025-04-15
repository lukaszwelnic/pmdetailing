import {useTranslation} from "react-i18next";

export default function Achievements() {
    const { t } = useTranslation();

    return <h1 className="text-2xl p-4">{t(`achievements.title`)}</h1>;
}
