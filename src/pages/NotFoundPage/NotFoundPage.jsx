import "./nofound.scss";
import { useLinkClickHandler } from "react-router-dom";
import { TitleField, Btn } from "../../components/DesignSystem";

export const NotFoundPage = () => {
  const linkHome = useLinkClickHandler("/");
  return (
    <div className="nofound">
      <TitleField text="404" size="7" center />
      <TitleField text="Page not found" center />
      <Btn
        label="Return to home page"
        btn="outline"
        fa="home"
        onClick={linkHome}
      />
    </div>
  );
};
