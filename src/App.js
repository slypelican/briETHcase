import WatchBoard from './Board.js'
// Data set FOR TESTING ONLY
import {GROUP_DATA} from './test_data.js'

export default function App() {
    return(<WatchBoard groups={GROUP_DATA} />)
}