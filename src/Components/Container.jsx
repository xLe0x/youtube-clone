function Container({ children }) {
  return (
    <div className="sm:max-[616px] md:max-w-[744px] lg:max-w-5xl mx-auto">
      {children}
    </div>
  );
}

export default Container;
