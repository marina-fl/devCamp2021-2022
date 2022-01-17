import Profile from '../components/body/Profile';

function ProfileContainer(){
   
    return (
        <Profile name='Mike' about='love hiking' avatar={require('../avatar.jpg')} />
)
    }
export default ProfileContainer;

