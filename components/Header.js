import { ConnectButton } from 'web3uikit';
import Link from "next/link";
export default function Header() {
    return (
        <div className="fc_header">
            <div className="fc_header_logo">
                <h1 className='Logo_text'> <Link href="/">RL.</Link></h1>
            </div>

            <div className="fc_header_menu showMenu">
                <div className="fc_header_menu_item topBotomBordersOut">
                    <Link href="#">Home</Link>
                    <Link href="#">Marketplace</Link>
                    <Link href="#">Auction</Link>
                    <Link href="#">Dashboard</Link>
                    <Link href="#">Create NFT</Link>
                </div>
            </div>
            <ConnectButton />
        </div>
    );
};

