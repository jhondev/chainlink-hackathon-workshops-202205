import { ConnectButton } from 'web3uikit';

export default function Header() {
  return (
    <nav className='flex flex-row border-b-2 p-5'>
      <h1 className='py-4 px-4 text-3xl font-bold'>Lotter!</h1>
      <div className='ml-auto py-2 px-4'>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
}
