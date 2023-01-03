const Image = () => {
  const list = [
    {
      id: 1,
      img: "img/1.jpg",
      name: "시계",
    },
    {
      id: 2,
      img: "img/3.png",
      name: "모자",
    },
    {
      id: 3,
      img: "img/4.jpg",
      name: "카메라",
    },
  ];

  return (
    <div className="flex">
      {list.map((list) => {
        return (
          <div key={list.id} className="img_box">
            <img src={list.img} alt="" width={"200px"} height={"100px"} />
            <span>{list.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Image;
