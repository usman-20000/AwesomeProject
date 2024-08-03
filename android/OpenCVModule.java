package com.yourapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import org.opencv.android.Utils;
import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.MatOfRect;
import org.opencv.core.Rect;
import org.opencv.core.Scalar;
import org.opencv.objdetect.CascadeClassifier;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import java.io.File;

public class OpenCVModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    OpenCVModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "OpenCV";
    }

    @ReactMethod
    public void detectBodyParts(String imagePath, Callback errorCallback, Callback successCallback) {
        try {
            File file = new File(imagePath);
            Bitmap bitmap = BitmapFactory.decodeFile(file.getAbsolutePath());
            Mat mat = new Mat();
            Utils.bitmapToMat(bitmap, mat);

            // Load the cascade classifier for body parts detection
            CascadeClassifier bodyClassifier = new CascadeClassifier("path_to_your_cascade.xml");

            MatOfRect bodyParts = new MatOfRect();
            bodyClassifier.detectMultiScale(mat, bodyParts);

            // Return the detected body parts as a result
            Rect[] bodiesArray = bodyParts.toArray();
            successCallback.invoke(bodiesArray.length);

        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}
