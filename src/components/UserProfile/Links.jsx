import locationImg from '../../assets/icon-location.svg'
import twitterImg from '../../assets/icon-twitter.svg'
import websiteImg from '../../assets/icon-website.svg'
import { useProfileStore } from '../store/store'
import Link from './Link'

const Links = () => {
  const location = useProfileStore(state => state.location)
  const twitter = useProfileStore(state => state.twitter)
  const website = useProfileStore(state => state.website)
  return (
    <div className='flex flex-col gap-3 pt-6'>
      <Link image={locationImg} alt='Location' info={location} />
      <Link image={twitterImg} alt='Twitter' info={twitter} />
      <Link image={websiteImg} alt='Website' info={website} />
    </div>
  )
}

export default Links