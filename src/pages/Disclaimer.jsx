import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-blue-900 text-white py-8 px-4 text-center">
      <h2 className="text-xl font-bold mb-4">Disclaimer for PrinterCareTech</h2>
      <div className="text-sm">
        <p className="mb-4">
          PrinterCareTech operates independently as a third-party entity,
          without affiliation to any printer brand, and does not participate in
          associate programs, affiliate advertising, or product endorsements.
          While we strive to provide comprehensive printer information, we
          cannot guarantee its absolute accuracy or compatibility with your
          specific model. We strongly advise users to review this disclaimer
          thoroughly to understand the information provided.
        </p>
        <p>
          Furthermore, we do not host external links on our website. If you
          encounter any, please notify us promptly for their removal. Brand
          names and logos used are purely for representation purposes and do not
          signify endorsement. Ultimately, users bear responsibility for
          verifying the compatibility of printer content (such as cartridges,
          toner, etc.) with their devices. We recommend consulting your printer
          manual or the manufacturer's website for definitive compatibility
          information.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
