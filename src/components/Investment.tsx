import React from "react";
import InvestmentCard from "./InvestmetCard";
import './Investment.css';

export interface Investment{
    id:string;
    imageUrl:string;
    title:string;
    location:string;
    status:'W Budowie'| 'W Sprzedaży'| 'Zrealizowano' | 'Wkrótce';
    priceFrom?:number;
    areaFrom?:number;
    description: string;
}

interface InvestmentGridProps{
    title:string;
    investments: Investment[];
}
const InvestmentGrid: React.FC<InvestmentGridProps> = ({title,investments})=>{
    const handleDetailsClick = (id: string)=>{
        alert(`Kliknięto "Dowiedz się więcej" dla informacji: ${id}`);
    };
    return(
        <section className="investment-grid-seciton">
            <h2 className="investment-grid-title">{title}</h2>
            <div className="investment-grid-contatiner">
                {investments.map((investment)=>(
                    <InvestmentCard
                        key={investment.id}
                        id={investment.id}
                        imageUrl={investment.imageUrl}
                        title={investment.title}
                        location={investment.location}
                        status={investment.status}
                        priceFrom={investment.priceFrom}
                        areaFrom={investment.priceFrom}
                        description={investment.description}
                        onDetailsClick={handleDetailsClick}
                        />
                ))}
            </div>
        </section>
    )
}
export default InvestmentGrid;