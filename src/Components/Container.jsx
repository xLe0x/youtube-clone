function Container({ children }) {
  return (
    <div className="max-sm:max-w-xl max-md:max-w-3xl max-lg:max-w-4xl mx-auto px-8">
      {children}
    </div>
  );
}

export default Container;
