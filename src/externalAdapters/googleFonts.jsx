import { config } from '@/Config.bs.js';

export const GoogleFontsScript = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      {config.googleFonts.families.map((family) => {
        return (
          <link
            key={family}
            href={`https://fonts.googleapis.com/css2?family=${family}&display=${config.googleFonts.display}`}
            rel="stylesheet"
          />
        );
      })}
    </>
  );
};
