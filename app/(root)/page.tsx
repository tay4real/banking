import TotalBalanceBox from "@/components/TotalBalanceBox"
import HeaderBox from "@/components/HeaderBox"
TotalBalanceBox
const Home = () => {
  const loggedIn = {firstName: 'Ademuyiwa'}
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn.firstName || 'Guest'} subtext="Access and mange your acount and transactions effectively" />
        </header>
  
        <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
        />
        
      </div>
    </section>
  )
}

export default Home