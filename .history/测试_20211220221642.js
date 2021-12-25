#include"math.h"

#include"graphics.h"

main() {
    int driver,mode;

    int x,y;

    driver=DETECT;

    mode=0;
    initgraph(&driver,&mode,"c:\tc");
    for(x=0;x<=360;x++) {
        putpixel((x-1),y,BLACK);
        y=100+100*sin(x/360.0*2.0*3.1415926);
        putpixel(x,y,WHITE);
        delay(1000);
    }

    getch();restorecrtmode();
}