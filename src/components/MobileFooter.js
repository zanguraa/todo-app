export default function MobileFooter(props) {
  return (
    <div className="w-full max-w-[520px]">
      <div className="mobile-footer flex items-center mt-5 md:hidden justify-center max-w-[520px] w-full  h-12 font-bold gap-5 bg-white rounded-md sha-[0px 35px 50px -15px rgba(194, 195, 214, 0.5)]">
        <p className="text-[#9495A5]">All</p>
        <p className="text-[#9495A5]">Active</p>
        <p className="text-[#9495A5]">Completed</p>
      </div>

      <div className="mobile-footer  items-center hidden md:flex gap-7 justify-around max-w-[520px] w-full  h-12 font-bold bg-white rounded-md sha-[0px 35px 50px -15px rgba(194, 195, 214, 0.5)]">
        <p className="text-[#9495A5] cursor-not-allowed text-xs ">
          {props.todos.length} item left
        </p>
        <div className="flex gap-2">
          <p className="text-[#9495A5] cursor-pointer">All</p>
          <p className="text-[#9495A5] cursor-pointer">Active</p>
          <p className="text-[#9495A5] cursor-pointer">Completed</p>
        </div>

        <p className="text-[#9495A5] text-xs ">Clear Completed</p>
      </div>
    </div>
  );
}
