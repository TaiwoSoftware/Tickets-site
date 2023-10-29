import React from 'react';
import TicketList from './TicketList';

const Page = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Ticket</h2>
                    <p><small>Currently open tickets.</small></p>
                </div>
            </nav>
            <TicketList />
        </main>
    );
}

export default Page;
