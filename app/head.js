export default function Head({ params }) {
  return (
    <>
      <title>LiveMedy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="LiveMedy Description" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
        rel="stylesheet"
        precedence="default"
      />
    </>
  );
}
