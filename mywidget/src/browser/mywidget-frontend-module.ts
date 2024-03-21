import { ContainerModule } from '@theia/core/shared/inversify';
import { MywidgetWidget } from './mywidget-widget';
import { MywidgetContribution } from './mywidget-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, MywidgetContribution);
    bind(FrontendApplicationContribution).toService(MywidgetContribution);
    bind(MywidgetWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: MywidgetWidget.ID,
        createWidget: () => ctx.container.get<MywidgetWidget>(MywidgetWidget)
    })).inSingletonScope();
});
