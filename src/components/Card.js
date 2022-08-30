const Card = ({ image, title }) => {
  return (
    <div className="bg-yellow-500/50 w-40 h-auto py-2 rounded-lg grid place-content-center px-1">
      <div className="flex justify-center">
        <img
          src={
            image
              ? image
              : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"
          }
          alt="Gambar"
          width={140}
        />
      </div>
      <h3 className="text-center font-bold text-white">{title}</h3>
      <p className="text-center text-white">Konten</p>
    </div>
  );
};

export default Card;
