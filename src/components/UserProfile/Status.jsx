import { useProfileStore } from '../store/store';
import StatusTile from './StatusTile';

const Status = () => {
  const repos = useProfileStore(state => state.repos)
  const followers = useProfileStore(state => state.followers)

  return (
    <div className='flex justify-around p-3 gap-3 text-txt-high-contrast bg-bg-primary rounded-xl'>
      <StatusTile title='Repos' value={repos} />
      <StatusTile title='Followers' value={followers} />
      <StatusTile title='Commits' value='9' />
    </div>
  );
}

export default Status;
