const dbounce = (calllback, time) => {
  let x;
  return (...arg) => {
    clearTimeout(x);
    x = setTimeout(() => {
      calllback(...arg);
    }, time);
  };
};

export default () => {
  const f = (num) => {
    setTimeout(() => {
      console.log("end server call" + num);
    }, 1000);
  };

  const myD = dbounce(f, 500);

  return <div onClick={()=>myD(7897987)}>Home</div>;
};
