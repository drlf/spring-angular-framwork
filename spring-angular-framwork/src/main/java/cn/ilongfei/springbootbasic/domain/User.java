package cn.ilongfei.springbootbasic.domain;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class User extends BaseEntity {
	
	@Column(name = "username", unique = true, length = 200)
    private String username;	//登录用户名
	@Column(name = "password", length = 200)
    private String password;
	@Column(name = "salt", length = 200)
    private String salt;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date registerDate;
	
	private String email;
	private String status;
	//以下属性来自loopback-angular-admin项目
	//TODO 与registerDate重复，需去掉registerDate
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date created;
	private String firstName;
	private String lastName;
	
    private Boolean locked = Boolean.FALSE;

    public User() {
    }
    
    @OneToOne
    UserBaseInfo userBaseInfo;
    
    @OneToMany	//(fetch = FetchType.LAZY)
    Set<Role> roles;
    
    public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public User(String username, String password) {
        this.username = username;
        this.password = password;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getCredentialsSalt() {
        return username + salt;
    }

    public Boolean getLocked() {
        return locked;
    }

    public void setLocked(Boolean locked) {
        this.locked = locked;
    }
    
    public void addRole(Role role){
    	if(roles==null)roles=new HashSet<Role>();
    	roles.add(role);
    }
    
    public void removeRole(Role role){
    	if(roles==null)return;
    	roles.remove(role);
    	/*for(Role role: roles){
    		if(userRole.getRoleId() == role.getId())userRoles.remove(userRole);
    	}*/
    }

	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}

	public UserBaseInfo getUserBaseInfo() {
		return userBaseInfo;
	}

	public void setUserBaseInfo(UserBaseInfo userBaseInfo) {
		userBaseInfo.setUser(this);
		this.userBaseInfo = userBaseInfo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	
}
