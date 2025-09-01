function Nav() {
  return (
    <nav  className="transition duration-1000 fixed w-screen h-12 flex g-2 items-center justify-between px-4 py-2 flex-wrap">
      <div data-aos="fade-up" data-aos-delay="0" className="logo font-bold text-xl">Hasanur Rahman</div>
      <div className="flex items-center justify-between g-4 lg:w-1/4 sm:w-1/2 ">
        <div className="link gap-4 text-white hidden sm:flex">
          <a data-aos="fade-up" data-aos-delay="200" href="/">Home.</a>
          <a data-aos="fade-up" data-aos-delay="400" href="/">Works.</a>
          <a data-aos="fade-up" data-aos-delay="600" href="#">Skills.</a>
        </div>
        <button data-aos="fade-up" data-aos-delay="800" className="!px-2 !py-1 btn">Contact Me</button>
      </div>
    </nav>
  );
}

export default Nav;
