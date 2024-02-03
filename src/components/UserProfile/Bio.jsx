import { useProfileStore } from "../store/store"

const Bio = () => {
  const bio = useProfileStore(state => state.bio)
  return (
    <p className='my-6 text-left text-txt-low-contrast1'>{bio}</p>
  )
}

export default Bio