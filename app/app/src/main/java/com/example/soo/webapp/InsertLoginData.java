package com.example.soo.webapp;

import android.app.Activity;
import android.widget.EditText;

import java.net.MalformedURLException;
import java.net.URL;


public class InsertLoginData extends PostRequest {
    public InsertLoginData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {
//        EditText server = activity.findViewById(R.id.server);
//        String serverURLStr = server.getText().toString();
        String serverURLStr = "http://52.79.226.43";
        try {
            url = new URL(serverURLStr + "/Lgninsert");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }


}