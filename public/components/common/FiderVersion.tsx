import React from "react";
import { useFider } from "@fider/hooks";

export const FiderVersion = () => {
  const fider = useFider();

  return (
    <p className="info center hidden-sm hidden-md">
      {!fider.isBillingEnabled() && (
        <>
          Support us{" "}
          <a target="_blank" href="https://discord.gg/DNeq72e">
            Synergy
          </a>
          <br />
        </>
      )}
      Bbakery Applications v{fider.settings.version}
    </p>
  );
};
