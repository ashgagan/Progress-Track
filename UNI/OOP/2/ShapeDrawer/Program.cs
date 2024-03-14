using System;
using SplashKitSDK;

namespace ShapeDrawer
{
    public class Program
    {
        private Shape? myShape;

        public static void Main()
        {

            Shape myShape = new Shape();
            Window window = new Window("Shape Drawer", 800, 600);
            do
            {
                SplashKit.ProcessEvents();
                SplashKit.ClearScreen();

                if (SplashKit.MouseClicked(MouseButton.LeftButton))
                {
                    myShape.X = SplashKit.MouseX();
                    myShape.Y = SplashKit.MouseY();
                }

                if (SplashKit.KeyTyped(KeyCode.SpaceKey))
                {
                    if (myShape.IsAt(SplashKit.MousePosition()))
                    {
                        myShape.Color = SplashKit.RandomColor();
                    }
                }

                myShape.Draw();

                SplashKit.RefreshScreen();
            } while (!window.CloseRequested);

       
        }
    }
}
