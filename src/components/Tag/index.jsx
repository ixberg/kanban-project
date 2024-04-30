const Tag = ({ color, text }) => {
  return (
    <div className={`${color} rounded-lg inline-block px-3 py-1 font-normal`}>
      <p className="text-gray-800 text-sm">{text}</p>
    </div>
  );
};

export default Tag;
