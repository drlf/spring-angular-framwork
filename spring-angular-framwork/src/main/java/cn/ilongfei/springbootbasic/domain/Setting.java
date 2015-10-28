package cn.ilongfei.springbootbasic.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Setting extends BaseEntity {
    private String key;
    private String value;
    private String type;
    private String options;

    public Setting() {
    }
    
    public Setting(String key, String value) {
    	this.key = key;
    	this.value = value;
    	this.type = "string";
    }
    
    public Setting(String key, String value, String type) {
    	this.key = key;
    	this.value = value;
    	this.type = type;
    }

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getOptions() {
		return options;
	}

	public void setOptions(String options) {
		this.options = options;
	}
    
    
}
