gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects3= [];
gdjs.Untitled_32sceneCode.GDBulletObjects1= [];
gdjs.Untitled_32sceneCode.GDBulletObjects2= [];
gdjs.Untitled_32sceneCode.GDBulletObjects3= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects3= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects3= [];
gdjs.Untitled_32sceneCode.GDHealthTextObjects1= [];
gdjs.Untitled_32sceneCode.GDHealthTextObjects2= [];
gdjs.Untitled_32sceneCode.GDHealthTextObjects3= [];
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects1= [];
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects2= [];
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Roll") > 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9538172);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(gdjs.evtTools.common.lerp(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3).getAsNumber(), 10, 0.5));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].resetTimer("Roll");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Roll") > 0.2 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9539116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(5))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9539972);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].resetTimer("Roll");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3))) + runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).sub((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3))) + runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].rotateTowardAngle((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0))) + 90, 0, runtimeScene);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).add(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9544252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].resetTimer("CanShoot");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getTimerElapsedTimeInSecondsOrNaN("CanShoot") >= 1.5 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9544708);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(15);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9546124);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects, (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getPointX("")) + 1, (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getPointY("")) + 1, "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].rotateTowardAngle((( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getAngle()), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].putAround(600, 400, 150, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].addPolarForce((( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getAngle()) + 90, 500, 1);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].getBehavior("Resizable").setSize(5, 10);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfEmptyGDEnemyObjects = Hashtable.newFrom({"Enemy": []});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9548188);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].resetTimer("EnemySpawn");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Untitled_32sceneCode.mapOfEmptyGDEnemyObjects) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects2[i].addForceTowardPosition((( gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getPointY("")), 200 * runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("EnemySpawn") >= 1.5 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9549876);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].putAround(600, 400, 500, gdjs.random(360));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].resetTimer("EnemySpawn");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Scale").setScaleX(0.4);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Scale").setScaleY(2);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects2});
gdjs.Untitled_32sceneCode.asyncCallback9552788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(9552788, gdjs.Untitled_32sceneCode.asyncCallback9552788);
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9552788(runtimeScene, asyncObjectsList)), 9552788, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Roll") > 0.4 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)).sub(1);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)) >= 15 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9554292);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(5)).mul(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(0.2);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).add(0.005);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(6)).add(5);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(6).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Untitled_32sceneCode.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerBulletObjects2[i].getBehavior("Text").setText("Shots Remaining = " + gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(1).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HealthText"), gdjs.Untitled_32sceneCode.GDHealthTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHealthTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHealthTextObjects2[i].getBehavior("Text").setText("Health = " + gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(2).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].putAround(600, 400, 200, (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0))));
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DifficultyText"), gdjs.Untitled_32sceneCode.GDDifficultyTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDifficultyTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDifficultyTextObjects1[i].getBehavior("Text").setText("Difficulty = " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHealthTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHealthTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHealthTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerBulletObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHealthTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHealthTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHealthTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDifficultyTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
