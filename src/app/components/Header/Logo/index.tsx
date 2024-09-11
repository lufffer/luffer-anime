const width = 36;

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-white font-bold ">Luffer Anime</h1>
      <img src="/chibi.png" alt="Logo" width={width} />
    </div>
  );
};

export default Logo;