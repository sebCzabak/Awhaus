import React from "react";
import './InvestmentCard.css';

interface InvestmentCardProps {
    id:string;
    imageUrl:string;
    title:string;
    location: string;
    status:'W Budowie'|'W Sprzedaży'|'Zrealizowano'|'Wkrótce';
    priceFrom?:number;
    areaFrom?:number;
    description:string;
    onDetailsClick:(id:string)=>void;
}

const InvestmentCard: React.FC<InvestmentCardProps>=({
    id,
    imageUrl,
    title,
    location,
    status,
    priceFrom,
    areaFrom,
    description,
    onDetailsClick,
})=> {
    const getStatusClass = (status:string)=>{
        switch(status){
            case 'W Budowie':
                return 'status-building';
            case 'W Sprzedaży':
                return 'status-sale';
            case 'Zrealizowano':
                return 'status-completed';
            case 'Wkrótce':
                return 'status-soon';
            default:
                return '';
        }
    };

    return(
        <div className="investment-card">
            <div className="investment-card-image-wrapper">
                <img src={imageUrl} alt={title}className="investment-card-image"/>
                <span className={`investment-card-status ${getStatusClass(status)}`}>
                    {status}
                </span>
            </div>
            <div className="investment-card-content">
                <h3 className="investment-card-title">{title}</h3>
                <p className="investment-card-location">{location}</p>
                {priceFrom && <p className="investment-card-price">Cena od: {priceFrom.toLocaleString('pl-PL')}zł</p>}
                {areaFrom && <p className="investment-card-area">Pow. od: {areaFrom} m²</p>}
                <p className="investment-card-description">{description}</p>
                <button className="investment-card-button"onClick={()=>onDetailsClick(id)}>
                    Dowiedz się więcej
                </button>
            </div>
        </div>
    );
};
export default InvestmentCard;

