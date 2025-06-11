import { useTranslation } from "react-i18next";
import Header from "./components/Header/Header";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("greeting")}</p>
      <Header />
    </>
  );
}

export default App;
