import { Link } from '@inertiajs/react';
import { rightArrowIcon2 } from '@/components/icons/common';
import './TestResultCard.scss';

const TestResultCard = ({ id, name, date, result, type, link }) => {
    return (
        <div className="test-result-card">
            <div className="result-content">
                <div className="content-row">
                    <div className="col-name">
                        <p>Patient Name</p>
                        <p>{name}</p>
                    </div>
                    <div className="col-date">
                        <p>Date Conducted</p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="content-row">
                    <div className="col-result">
                        <p>Test Results</p>
                        <p>{result}</p>
                    </div>
                    <div className="col-type">
                        <p>Test Type</p>
                        <p>{type}</p>
                    </div>
                    <div className="col-id">
                        <p>Test ID</p>
                        <p>{id}</p>
                    </div>
                </div>
            </div>
            <div className="link-wrapper">
                <Link href={link}>
                    View Results<span>{rightArrowIcon2}</span>
                </Link>
            </div>
        </div>
    );
};

export default TestResultCard;
