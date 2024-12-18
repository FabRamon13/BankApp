import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
const loggedIn = {firstName: 'Fabrizzio', lastName: 'Ramon',email: '21framon@gmail.com'};

    return (
        <section className="home">
            <div className="home-content">
                <header className = "home-header">
                   <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently"
                   />

                   <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1259.13}
                   />
                </header>
            RECETN TRANSACTIONS

            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.50},{currentBalance: 500.00}]}
            />
        </section>
    )
}

export default Home 