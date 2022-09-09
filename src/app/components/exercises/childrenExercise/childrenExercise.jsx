import React from "react";
import CollapseWrapper from "../../common/collapse";
import Component from "./component";
import ListComponent from "./listComponent";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider/>
            <SmallTitle>Решение React.children.map</SmallTitle>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
