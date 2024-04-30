const Avatar = ({ image }) => {
  return (
    <div className="flex h-5 w-5 overflow-hidden rounded-full bg-pin">
      <img className="h-full w-full object-cover" src={image} alt="Avatar" />
    </div>
  );
};

export default Avatar;
