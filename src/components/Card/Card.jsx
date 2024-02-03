import Bio from "../UserProfile/Bio";
import HeaderProfile from "../UserProfile/HeaderProfile";
import Links from "../UserProfile/Links";
import Status from "../UserProfile/Status";
import { useProfileStore } from "../store/store";
import Loading from "../Loading/Loading";

const Card = () => {
  const isLoading = useProfileStore((state) => state.initializing);
  const userImage = useProfileStore((state) => state.image);
  const showCard = useProfileStore(state => state.show)

  return (
    <>
      {showCard && <div className="grid  gap-8 bg-bg-secondary p-5 w-full rounded-2xl max-w-xl md:p-10 md:grid-cols-[minmax(0,max-content),1fr]">
        {isLoading ? <Loading /> : (
          <>
            <img
              src={userImage}
              alt="User Image"
              width={100}
              height={100}
              className="hidden rounded-full md:block"
            />
            <div >
              <HeaderProfile />
              <Bio />
              <Status />
              <Links />
            </div>
          </>
        )}
      </div>}
    </>
  );
};

export default Card;
