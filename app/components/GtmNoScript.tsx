/* eslint-disable @typescript-eslint/no-explicit-any */

const GtmNoScript = async ({ googleTagManager }: any) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: googleTagManager,
      }}
    />
  );
};

export default GtmNoScript;
