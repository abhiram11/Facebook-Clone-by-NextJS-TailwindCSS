function HeaderIcon({ Icon }) {
  return (
    <div
      className="flex md:active:border-b-2 md:active:border-blue-500
       cursor-pointer items-center
     md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl"
    >
      <Icon className="h-5" />
    </div>
  );
}

export default HeaderIcon;
