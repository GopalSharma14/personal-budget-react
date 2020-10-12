import React from 'react';

function HomePage() {
  return (
    <main className=" container center" id="main">

        <div className="page-area"
            styles="background-image: url('https://hougumlaw.com/wp-content/uploads/2016/05/light-website-backgrounds-light-color-background-images-light-color-background-images-for-website-1024x640.jpg');"
            alt="green background">

            <article>
                <header>
                    <h1>Things to do !!</h1>
                </header>
            </article>

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>

            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>

            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear...
                    because they know it is all good and accounted for.
                </p>
            </div>

            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>

            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>

            <div className="text-box">
                <h1>Personal</h1>
                
                <div id="my_data"></div>
                
            </div>

            <div className="text-box">
                <h1>Free</h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>

                </p>
            </div>

            <div className="text-box">
                <section>

                    <h1>Referrals</h1>
                    <h2>
                        Invite your friends
                    </h2>
                    <p>Get 50 dollars on successfully referring a friend.</p>
                </section>

            </div>

            <div className="text-box">
                <section>
                    <h1>Referrals</h1>
                    <h2>
                        Invite your friends
                    </h2>
                    <p>Get 50 dollars on successfully referring a friend.</p>
                </section>

            </div>


        </div>

    </main>
  );
}

export default HomePage;