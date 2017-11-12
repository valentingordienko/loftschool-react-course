import React, {PureComponent} from 'react';
import './Step.css';

class Step extends PureComponent {

    handleClick = () => {

        if (this.props.isClickable) {

            this.props.onClick(this.props.number);
        }

    }

    render() {

        const {number, isSelected, isClickable, children} = this.props;

        let componentClassName = 'step';

        if(isClickable){

            componentClassName += ' step-clickable';

        } else if (isSelected) {

            componentClassName += ' step-selected';
        }



        return (
            <div className={componentClassName} onClick={this.handleClick}>
                <p className="step__number">{number}</p>
                <p className="step__title">{children}</p>
            </div>
        );
    }
}

export default Step;
