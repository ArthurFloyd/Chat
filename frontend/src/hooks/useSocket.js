import { useContext } from 'react';
import SocketContext from '../context/socket/SocketContext';

const useSocket = () => useContext(SocketContext);

export default useSocket;
