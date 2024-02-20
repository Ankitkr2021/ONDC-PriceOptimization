import NavBar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <h1 className='text-4xl my-5 font-bold tracking-tight text-gray-900'>My Orders</h1>
        <UserOrders></UserOrders>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;   