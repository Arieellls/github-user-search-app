import { useProfileStore } from "../store/store";

const HeaderProfile = () => {
  const name = useProfileStore((state) => state.name);
  const userImage = useProfileStore(state => state.image)
  const username = useProfileStore((state) => state.username);
  const joinedDate = useProfileStore((state) => state.joinedDate);

  return (
    <div className="flex flex-row justify-start items-start gap-6 text-txt-high-contrast">
      <img src={userImage} alt="User Image" width={80} height={80} className="rounded-full md:hidden" />
      <div className="grid grid-cols-1 w-full text-left md:grid-cols-2">
        <h1>{name}</h1>
        <p className="md:col-start-1 md:col-end-2">{username}</p>
        <p className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:self-end md:text-right">{joinedDate}</p>
      </div>
    </div>
  );
};

export default HeaderProfile;
